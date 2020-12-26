<template>
	<div>
		<CustomInput v-model="ip" title="IP Address" id="ip" :isError="isError" />
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
								continent {
                  name
                }
                location {
                	lat
                	long
                }
                capital {
									name
									timeZone {
										name
									}
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
			if (data) {
				this.isError = false
				this.setResultsData(data)
			} else {
				this.isError = true
				this.setResultsData(data)
			}
		},
		setResultsData (data) {
			if (data) {
				this.resultsData.ipAddress = data.ipAddress.address
				this.resultsData.continent = data.ipAddress.country.continent ? data.ipAddress.country.continent.name : '-'
				this.resultsData.country = data.ipAddress.country ? data.ipAddress.country.name : '-'
				this.resultsData.city = data.ipAddress.country.capital ? data.ipAddress.country.capital.name : '-'
				this.resultsData.timeZone = data.ipAddress.country.capital.timeZone ? data.ipAddress.country.capital.timeZone.name : '-'
				this.resultsData.coordinates = data.ipAddress.country ? data.ipAddress.country.location : '-'
			} else {
				this.resultsData.ipAddress = this.ip
				this.resultsData.continent = '-'
				this.resultsData.country = '-'
				this.resultsData.city = '-'
				this.resultsData.timeZone = '-'
				this.resultsData.coordinates = '-'
			}
		}
	}
}
</script>
