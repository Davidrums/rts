function update() {
	var classString = "";
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			if (typeof grid[i][j] !== "undefined") {};
				classString = "";

				var colNum = (i*10)+j;
				var current = $("td")[colNum];
			
				var col = grid[i][j];
				if (col.type.name === types.tank.name) classString = classString + " tank";
				if (col.type.name === types.troops.name) classString = classString + " troops";
				

				if (col.team === "a") classString = classString + " teama";
				if (col.team === "b") classString = classString + " teamb";
				
				if (col.selected === true) classString = classString + " selected";
				
				//console.log(i+":"+j+" "+classString);
				if (classString !== ""){
					current.className = classString;
				}else{
					current.className = "empty";
				}
		};
	};

}