<template>
	<div class="result-table">
		<p class="result-table__title">Result</p>
		<CustomTable :dataArray="getInfoByIp" :titles="titles" />
	</div>
</template>

<script>
import CustomTable from '../ui/CustomTable'
export default {
	name: 'ResultTable',
	components: {
		CustomTable
	},
	data () {
		return {
			titles: [
				'IP address',
				'Continent/code',
				'Country/code',
				'City',
				'Time zone',
				'Coordinates'
			]
		}
	},
	computed: {
		getInfoByIp () {
			const data = this.$store.getters.getInfoByIp
			const defaultData = this.$store.getters.getDefaultData
			return data.length > 0 ? data : defaultData
		}
	}
}
</script>

<style scoped>
	.result-table__title {
		font-size: 18px;
		line-height: 25px;
		margin: 48px 0 13px 0;
	}
</style>
