<template>
	<div>
		<table class="custom-table">
			<tr class="custom-table__title">
				<th v-for="(title, index) in dataArray" :key="index">
					{{ title }}
				</th>
			</tr>
			<tr v-for="(data, index) in dataArray" :key="index" class="cusom-table__body">
				<td v-for="(element, index) in dataArray" :key="index">
					{{ element }}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'CustomTable',
	props: {
		dataArray: {
			type: Array
		}
	}
}
</script>

<style scoped>
	.custom-table {
			border-collapse: collapse;
			width: 100%;
	}
	.custom-table td {
			border-left: 1px solid #CCCCCC;
			border-right: 1px solid #CCCCCC;
			padding: 8px;
			text-align: center;
			font-size: 12px;
			color: #656565;
	}
	.custom-table tr {
			border-bottom: 1px solid #CCCCCC;
	}
	.custom-table th {
			border-collapse: collapse;
			padding-top: 12px;
			padding-bottom: 12px;
			border: 1px solid #656BF2;
			background-color: #656BF2;
			color: white;
			text-align: center;
			font-size: 12px;
			font-weight: normal;
	}
</style>