<template>
	<div class="result-table">
		<p class="result-table__title">{{ $t('result') }}</p>
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
		}
	},
	computed: {
		getInfoByIp () {
			const data = this.$store.getters.getInfoByIp
			const defaultData = this.$store.getters.getDefaultData
			return data.length > 0 ? data : defaultData
		},
		titles () {
			return [
				this.$t('address'),
				this.$t('continent'),
				this.$t('country'),
				this.$t('city'),
				this.$t('timeZone'),
				this.$t('coordinates')
			]
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
