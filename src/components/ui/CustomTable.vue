<template>
	<div>
		<table class="custom-table">
			<tr class="custom-table__title">
				<th v-for="(title, index) in titles" :key="index">
					{{ title }}
				</th>
			</tr>
      <tr v-for="(data, index) in dataArray" :key="index" class="custom-table__body">
        <td v-for="(answer, index) in data" :key="index">
          {{ answer }}
        </td>
      </tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'CustomTable',
	props: {
		dataArray: { type: Array },
    titles: { type: Array }
	}
}
</script>

<style scoped>
	.custom-table {
    width: 100%;
    border-collapse: collapse;
	}
	.custom-table td {
    padding-top: 11px;
    padding-bottom: 11px;
    text-align: center;
    font-size: 12px;
    border-left: 1px solid #CCC;
    border-right: 1px solid #CCC;
    color: #656565;
    line-height: 16px;
	}
	.custom-table tr {
    border-bottom: 1px solid #CCC;
	}
	.custom-table th {
    line-height: 16px;
    background-color: #656BF2;
    text-align: center;
    border-collapse: collapse;
    padding-top: 9px;
    padding-bottom: 9px;
    border: 1px solid #656BF2;
    color: white;
    font-size: 12px;
    font-weight: normal;
	}
</style>
