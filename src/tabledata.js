const baseArray = new Array(20).fill().map((_, i) => i);

const tableRow = (rowIndex, baseArray) => baseArray.map(i => `Row ${rowIndex}, Column ${i}`);

const tableData = {
    header: baseArray.map(i => `Header ${i}`),
    data: baseArray.map(rowIndex => tableRow(rowIndex, baseArray)),
};

export default tableData;
