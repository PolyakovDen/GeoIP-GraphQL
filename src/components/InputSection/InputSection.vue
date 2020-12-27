<template>
	<div>
		<CustomInput v-model="ip" :title="$t('ipAddress')" id="ip" :isError="isError" />
    <CustomButton @click="handleIp" :title="$t('infButton')" />
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
								alpha2Code
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
				this.updateTablesData(this.resultsData)
			} else {
				this.isError = true
				this.setResultsData(data)
				this.updateTablesData(this.resultsData)
			}
		},
		setResultsData (data) {
			if (data) {
				this.resultsData.ipAddress = data.ipAddress.address
				this.resultsData.continent = data.ipAddress.country.continent ? data.ipAddress.country.continent.name : '-'
				this.resultsData.country = data.ipAddress.country ? `${data.ipAddress.country.name}/${data.ipAddress.country.alpha2Code}` : '-'
				this.resultsData.city = data.ipAddress.country.capital ? data.ipAddress.country.capital.name : '-'
				this.resultsData.timeZone = data.ipAddress.country.capital.timeZone ? data.ipAddress.country.capital.timeZone.name : '-'
				this.resultsData.coordinates = data.ipAddress.country ? `${data.ipAddress.country.location.lat.toFixed(1)}/${data.ipAddress.country.location.long.toFixed(1)}` : '-'
			} else {
				this.resultsData.ipAddress = this.ip
				this.resultsData.continent = '-'
				this.resultsData.country = '-'
				this.resultsData.city = '-'
				this.resultsData.timeZone = '-'
				this.resultsData.coordinates = '-'
			}
		},
		updateTablesData (data) {
			this.$store.commit('setInfoByIp', data)
			this.$store.commit('setHistoryData', data)
		}
	}
}
</script>
