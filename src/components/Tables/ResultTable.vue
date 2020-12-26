<template>
	<div class="result-table">
		<CustomTable :dataArray="dataArray" />
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
			dataArray: [
				'hello', 'hi', 'u'
			]
		}
	}
}
</script>