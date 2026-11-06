	class MyIFB_ABC{
		// ifb me sab kuch sapcode par he depend krega.. 
		// sapcode = primary key
		
			FXP = new MyPList_FX();
			myTab = new MyTable();
			io = new IO();
			bool_AutoUpdateTableHeader = true;
						
			//
			bool_Enable = true; isEnable(){return bool_Enable;}
			
			
			// PList me se path extract karna
			extractPaths(pList){
				/*let out=[];
				pList.filter(item => { out.push(item.path); });
				return out;
				*/
				return this.FXP.extractListOfKey(plist, 'path');
			}

			/* 
			1. plain text file read karna, 
			2. 2D array me convert karna, 
			3. table ka header update karna, 
			4. return list of script map type object 
			*/
			async readAndConvert_PList(PATH){
					const data = await this.io.readFile(PATH); 
					if(data){
						let tabularData = this.myTab.splitToTable(data);
						if(this.bool_AutoUpdateTableHeader) this.updateTableHeader(tabularData);
						let mapList = this.FXP.toPList(tabularData);
						return mapList;
						//out = [...out, ...mapList]; // merge 2 arrays data..
					}
				return null;
			}
			
			async readAndConvertMultiple_PList(list){
				let out = [];				
				for(let i=0; i<list.length; i++){
					//console.log(list[i]);
					let mapList = readAndConvert_PList(list[i]);
					if(mapList){
						out = [...out, ...mapList]; // merge 2 arrays data..
					}
				}
				return out;
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
					S = S.includes("Cap".toLowerCase())?"capacity":S;
					S = S.includes("Capacity".toLowerCase())?"capacity":S;

					
/*					
					S = S.includes("?????".toLowerCase())?"offerPrice":S;
					S = S.includes("?????".toLowerCase())?"advance":S;
*/					
					TABLE[0][i] = S;
				}
//				console.log(">>>   "+TABLE[0]);
			}
			
			myPathList = [];
			/* Note: list = [];
				 Isme jo bhi paths hoga wo sabhi data merge ho jayenge 
				 (primary key - sapcode)
				 Agar file 2 me same sap code hoga to wo ignore ho jayega...
			*/
			async readSapCodePList(list = this.myPathList){
				let out = this.readAndConvertMultiple_PList(list);
				out = this.FXP.getUniqueListByKey(out,"sapcode");
				return out;
			}
	}











