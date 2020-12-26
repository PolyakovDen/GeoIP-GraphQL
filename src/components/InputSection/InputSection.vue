<template>
	<div>
		<CustomInput v-model="ip" title="IP Address" id="ip" />
    <CustomButton @click="handleIp" title="Get information" />
	</div>
</template>

<script>
import gql from 'graphql-tag';
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";

export default {
	name: 'InputSection',
	components: {
		CustomInput,
		CustomButton
	},
	data () {
		return {
			ip: '',
			ipAddress: '',
			isError: false,
			resultsData: {
				ipAddress: '',
				continent: '',
				country: '',
				city: '',
				timeZone: '',
				coordinates: ''
			}
		}
	},

	methods: {
		async handleIp () {
			const { data } = await this.$apollo.query({
				query: gql`
					query ($address: String!) {
						ipAddress(address: $address) {
							address
							country {
								name
							}
							city {
								name
								timeZone {
									name
								}
							}
						}
					}
				`,
				errorPolicy: 'ignore',
				variables: {
					address: this.ip
				}
			})
			console.log(data);
		},
	}
}
</script>