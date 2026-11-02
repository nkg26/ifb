/*
how to use...

<script src="https://nkg26.github.io/libs/js/cls-IO.js"></script>	
<script src="https://nkg26.github.io/libs/js/cls-MyTable.js"></script>	
<script src="https://nkg26.github.io/ifb/res/sapcodes/cls-MyIFB.js"></script>	

new MyIFB().loadData(); // this will auto call user custom function start_with_items(items)
  
  // this function will auto call once all data is read by MyIFB class...
	function start_with_items(items){
      // process your code... 
	}

*/



// JavaScript me await tabhi kaam karta hai jab uski parent line (ya function) ke aage async likha ho.
	class MyIFB{
	
			DATA_P = [
				{path:"https://nkg26.github.io/ifb/res/sapcodes/SAP-ITEMS-AC.txt", 					OF:"SAP-ITM-AC", 			inCat:"ALL,AC"},
				{path:"https://nkg26.github.io/ifb/res/sapcodes/SAP-ITEMS-OTH.txt",	 				OF:"SAP-ITM-OTH", 		inCat:"ALL,OTH"},
				{path:"https://nkg26.github.io/ifb/res/sapcodes/SAP-ITEMS-REF.txt", 					OF:"SAP-ITM-REF", 			inCat:"ALL,REF"},
				{path:"https://nkg26.github.io/ifb/res/sapcodes/SAP-CODES-MRP-DP.txt", 			OF:"MRP-DP-ALL", 			inCat:"ALL"},
				{path:"https://nkg26.github.io/ifb/res/sapcodes/SAP-CODES-MRP-DP-REF.txt", 	OF:"MRP-DP-REF", 			inCat:"ALL,REF"},
				{path:"https://nkg26.github.io/ifb/res/sapcodes/SAP-CODES-Channels.txt", 		OF:"SAP-PLATEFORM", 	inCat:"ALL"},
				{path:"https://nkg26.github.io/ifb/res/sapcodes/SAP-CODES-NE.txt", 					OF:"SAP-NE", 					inCat:"ALL"},
				{path:"https://nkg26.github.io/ifb/res/sapcodes/SAP-CODES-POINT.txt", 			OF:"SAP-POINT", 			inCat:"ALL"}
			];
			
			// agar list item ki value me specified value exist karti hai.
			filterByValue(pList, KEY, INCLUDES_VALUE){
				return pList.filter(item => {
					return (item[KEY] !== undefined) && item[KEY].includes(INCLUDES_VALUE);
				});
			}

			// agar list item ki value me specified value exist karti hai.
			filterByValue_LC(pList, KEY, INCLUDES_VALUE){
				INCLUDES_VALUE = INCLUDES_VALUE.toLowerCase();
				return pList.filter(item => {
					return (item[KEY] !== undefined) && item[KEY].toLowerCase().includes(INCLUDES_VALUE);
				});
			}

			findPList(KEY, VALUE){
				return this.filterByValue_LC(this.DATA_P, KEY, VALUE);
			}

			findPList_path(KEY, VALUE){
				return this.extractPaths(this.findPList(KEY, VALUE));
			}

			extractPaths(pList){
				let out=[];
				pList.filter(item => { out.push(item.path); });
				return out;
			}

			myTab = new MyTable();
			io = new IO();
			
			async loadData(){
				var list_items 	= this.findPList_path("OF","SAP-ITM");
				var list_mrpdp 	= this.findPList_path("OF","MRP-DP");
				var list 				= this.findPList_path("OF","SAP-POINT");
				
/*				console.log("=============================================================");
				console.log(list_items);
				console.log(list_mrpdp);
				console.log(list);
				console.log("=============================================================");
*/
			
				let out = [];
				let v1 = await this.toMapArray(list_items);
				let v2 = await this.toMapArray(list_mrpdp);
				let v3 = await this.toMapArray(list);
				
/*				console.log("=========================");
				console.log(v1);
/*				console.log(v2);
				console.log(v3);
*/				
				this.mergeByKey(v1,v2,"sapcode");
				this.mergeByKey(v1,v3,"sapcode");

				start_with_items(v1);
			}
			
			async toMapArray(list){
				let out = [];				
				for(let i=0; i<list.length; i++){
					console.log(list[i]);
					const data = await this.io.readFile(list[i]); 
					
					if(data){
						let tabularData = this.myTab.splitToTable(data);
						this.updateTableHeader(tabularData);
						let mapList = this.myTab.toKeyMapObjectList(tabularData);
						out = [...out, ...mapList]; // merge 2 arrays data..
					}
				}
				return out;
			}
			
			mergeByKey(mapListMain, mapListAdded, primaryKey){
			   this.myTab.merge_KeyMapObjects(mapListMain, mapListAdded, primaryKey);
			 }

			updateTableHeader(TABLE){
				// update table headers...
	//			console.log(TABLE[0]);
				for(let i=0; i<TABLE[0].length; i++){
					let S = TABLE[0][i];
					S = S.toLowerCase().replaceAll("  "," ");
					S = S.trim();
					S = S.includes("SAP Code".toLowerCase())?"sapcode":S;
					S = S.includes("Model Name".toLowerCase())?"name":S;
					S = S.includes("Description".toLowerCase())?"name":S; // ref
					S = S.includes("Finish Name".toLowerCase())?"color":S; // ref
					S = S.includes("Color / Finish".toLowerCase())?"color":S;
					S = S.includes("MRP".toLowerCase())?"mrp":S;
/*					
					S = S.includes("?????".toLowerCase())?"offerPrice":S;
					S = S.includes("?????".toLowerCase())?"advance":S;
*/					
					TABLE[0][i] = S;
				}
//				console.log(">>>   "+TABLE[0]);
			}
			
	}
