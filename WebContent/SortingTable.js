/*document.getElementById("name").click=SortByName(people,document.getElementById("name"));*/

/*document.getElementById("age").click=SortByAge(people,age);
*/

function SortByName(tbody,col){
	alert("hi");
	var rows=tbody.rows,
	 rlen=rows.length,
	 arr=new Array(),
	 i,j,cells,clen;
	
	for(i=0;i<rlen;i++)
		{
		 cells=rows[i].cells;
		 clen=cells.length;
		 arr[i]=new Array();
		 for(j=0;j<clen;j++)
			 {
			  arr[i][j]=cells[j].innerHTML;
			 }
		}
    alert(col.cellIndex);
    arr.sort(function (a, b) {
        return (a[col.cellIndex] == b[col.cellIndex]) ? 0 : ((a[col.cellIndex] > b[col.cellIndex]) ? 1 : -1);
    });
	
	for(i=0;i<rlen;i++)
		{
        rows[i].innerHTML = "<td>" + arr[i].join("</td><td>") + "</td>";
		 }
		
}
function SortByAge(tbody,col){
	
	var rows=tbody.rows,
	 rlen=rows.length,
	 arr=new Array(),
	 i,j,cells,clen;
	
	for(i=0;i<rlen;i++)
		{
		 cells=rows[i].cells;
		 clen=cells.length;
		 arr[i]=new Array();
		 for(j=0;j<clen;j++)
			 {
			  arr[i][j]=cells[j].innerHTML;
			 }
		}
    
    arr.sort(function (a, b) {
        return (a[col.cellIndex] == b[col.cellIndex]) ? 0 : ((a[col.cellIndex] > b[col.cellIndex]) ? 1 : -1);
    });
	
	for(i=0;i<rlen;i++)
		{
        rows[i].innerHTML = "<td>" + arr[i].join("</td><td>") + "</td>";
		 }
		
}