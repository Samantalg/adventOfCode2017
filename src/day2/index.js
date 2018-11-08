var input = "116	1259	1045	679	1334	157	277	1217	218	641	1089	136	247	1195	239	834\n269	1751	732	3016	260	6440	5773	4677	306	230	6928	7182	231	2942	2738	3617\n644	128	89	361	530	97	35	604	535	297	599	121	567	106	114	480\n105	408	120	363	430	102	137	283	123	258	19	101	181	477	463	279\n873	116	840	105	285	238	540	22	117	125	699	953	920	106	113	259\n3695	161	186	2188	3611	2802	157	2154	3394	145	2725	1327	3741	2493	3607	4041\n140	1401	110	119	112	1586	125	937	1469	1015	879	1798	122	1151	100	926\n2401	191	219	607	267	2362	932	2283	889	2567	2171	2409	1078	2247	2441	245\n928	1142	957	1155	922	1039	452	285	467	305	506	221	281	59	667	232\n3882	1698	170	5796	2557	173	1228	4630	174	3508	5629	4395	180	5100	2814	2247\n396	311	223	227	340	313	355	469	229	162	107	76	363	132	453	161\n627	1331	1143	1572	966	388	198	2068	201	239	176	1805	1506	1890	1980	1887\n3390	5336	1730	4072	5342	216	3823	85	5408	5774	247	5308	232	256	5214	787\n176	1694	1787	1586	3798	4243	157	4224	3603	2121	3733	851	2493	4136	148	153\n2432	4030	3397	4032	3952	2727	157	3284	3450	3229	4169	3471	4255	155	127	186\n919	615	335	816	138	97	881	790	855	89	451	789	423	108	95	116";
function processInput(test){
  let lines = test.split("\n");
  lines.forEach((element, index, lines) => {
    lines[index] = element.split("\t");
    for(let i = 0; i < lines[index].length; i++ ) {
      lines[index][i] = parseInt(lines[index][i]);
    }
  });

  return lines;
}

function getMin(array) {
    let min = array[0];
    for(let i = 0; i < array.length-1; i++) {
      if (array[i] > array[i+1] & array[i+1] < min) {
        min = array[i+1];
      }
    }
  
  return min;
} 
  
function getMax(array) {
  let max = array[0];
  for(let i = 0; i < array.length-1; i++) {
    if (array[i+1] > array[i] & array[i+1] >= max) {
      max = array[i+1];
    }
  }
  
  return max;
} 
  
function checkSum(inputArray) {
  let sum = 0;

  inputArray.forEach(line => {
  console.log(line);
  sum += getMax(line) - getMin(line); 
  });
  
  return sum;
}

function getResultRow(array) {
  let value;

    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length; j++) {
        if (array[i] % array [j] == 0 && array[i] !== array[j]) {
          value = array[i]/array[j];
        }
      } 
    }
  
  return value;
}
  
function getResult(inputArray) {
  let sum = 0;
  
  inputArray.forEach(line => {
  sum += getResultRow(line); 
  });
    
  return sum;
}
 
let testInput = processInput(input);
const sumRank = checkSum(testInput);
const sumDivision = getResult(testInput);
  

module.exports = checkSum;