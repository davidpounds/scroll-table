const baseArray = new Array(20).fill().map((_, i) => i);

const tableRow = (rowIndex, baseArray) => baseArray.map(i => `Row ${rowIndex}, Column ${i}`);

const tableData = {
    header: baseArray.map(i => `Header ${i}`),
    data: [
        tableRow(0, baseArray),
        tableRow(1, baseArray),
        tableRow(2, baseArray),
        tableRow(3, baseArray),
    ],
};

export default tableData;
