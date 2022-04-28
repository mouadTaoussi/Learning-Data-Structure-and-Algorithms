// Requiring the module
// const reader = require('xlsx')
import * as XLSX from 'xlsx';
// Reading our test file
const file : any = XLSX.readFile('./Classeur1.xlsx')
  
let data : any = []
  
const sheets: any = file.SheetNames
console.log(sheets)  

for(let i = 0; i < sheets.length; i++) {
  const tabularDataJsoned = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
  tabularDataJsoned.forEach((res: any) => {
     data.push(res)
  })
}

// Printing data
console.log(data)





// Sample data set
let student_data = [{
    Student:'Nikhil',
    Age:22,
    Branch:'ISE',
    Marks: 70
},
{
    Student:'Amitha',
    Age:21,
    Branch:'EC',
    Marks:80
}]
  
const ws = XLSX.utils.json_to_sheet(student_data)
  
XLSX.utils.book_append_sheet(file,ws,"Sheet3")
  
// Writing to our file
XLSX.writeFile(file,'./test.xlsx')

export { file };