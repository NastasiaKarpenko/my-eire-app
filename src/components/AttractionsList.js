import Attraction from "./Attraction";

function AttractionsList() {
  const attractions = [
    {
      name: "The Cliffs of Moher",
      img: "attr_1.jpg",
      info: "<p>The Cliffs of Moher (Irish: Aillte an Mhothair) are sea cliffs located at the southwestern edge of the Burren region in County Clare, Ireland. They run for about 14 kilometres (9 miles). At their southern end, they rise 120 metres (390 ft) above the Atlantic Ocean at Hags Head, and, 8 kilometres (5 miles) to the north, they reach their maximum height of 214 metres (702 ft) just north of O'Brien's Tower, a round stone tower near the midpoint of the cliffs, built in 1835 by Sir Cornelius O'Brien, then continue at lower heights. The closest settlements are the villages of Liscannor 6 km (4 miles) to the south, and Doolin 7 km (4 miles) to the north.</p><p>From the cliffs, and from atop the tower, visitors can see the Aran Islands in Galway Bay, the Maumturks and Twelve Pins mountain ranges to the north in County Galway, and Loop Head to the south. The cliffs rank among the most visited tourist sites in Ireland, with around 1.5 million visits per year.</p>",
      place: "Nearest city	Lahinch, County Clare, Ireland",
    },

    {
      name: "Cork",
      img: "attr_2.jpg",
      info: "<p>Cork (Irish: Corcaigh, from corcach, meaning \'marsh\') is the second largest city in the Republic of Ireland, third largest on the island of Ireland, and largest in the province of Munster. At the 2022 census, it had a population of 224,004 </p><p>The city centre is an island between two channels of the River Lee which meet downstream at its eastern end, where the quays and docks along the river lead outwards towards Lough Mahon and Cork Harbour, one of the largest natural harbours in the world </p><p>Originally founded in the 6th century as a monastic settlement, Cork was expanded by Viking invaders around 915. Its charter was granted by Prince John in 1185. Cork city was once fully walled, and the remnants of the old medieval town centre can be found around South and North Main streets. The city's cognomen of \'the rebel city\' originates in its support for the Yorkist cause in the Wars of the Roses. Corkonians sometimes refer to the city as \'the real capital\', a reference to its opposition to the Anglo-Irish Treaty in the Irish Civil War.</p>",
      place: "The province of Munster, County Cork",
    },

    {
      name: "Galway",
      img: "attr_3.jpg",
      info: "<p>Galway (Irish: Gaillimh) is a city in the West of Ireland, in the province of Connacht, which is the county town of County Galway. It lies on the River Corrib between Lough Corrib and Galway Bay. It is the most populous settlement in the province of Connacht, the fifth most populous city on the island of Ireland and the fourth most populous in the Republic of Ireland, with a population at the 2022 census of 85,910. </p><p>Located near an earlier settlement, Galway grew around a fortification built by the King of Connacht in 1124. A municipal charter in 1484 allowed citizens of the by then walled city to form a council and mayoralty. Controlled largely by a group of merchant families, the Tribes of Galway, the city grew into a trading port. Following a period of decline, as of the 21st century, Galway is a tourist destination known for festivals and events including the Galway International Arts Festival. </p> <p>In 2018, Galway was named the European Region of Gastronomy. The city was the European Capital of Culture for 2020, alongside Rijeka, Croatia. </p><p>The Claddagh</p><p>On the west bank of the River Corrib as it enters the sea is the ancient neighbourhood of The Claddagh. For centuries it was an Irish-speaking enclave outside the city walls. Claddagh residents were mainly fisher folk and were governed by an elected 'King'. The King of the Claddagh settled or arbitrated disputes among the locals and had the privilege of a white sail on his fishing boat. While the last holder of the title died in 1972, it is still used in a purely honorary and ceremonial context. The area is also known for its association with the Claddagh Ring. </p>",
      place: "The province of Connacht, County Galway",
    },

    {
      name: "Killarney",
      img: "attr_4.jpg",
      info: "<p> Killarney (Irish: Cill Airne, meaning 'church of sloes') is a town in County Kerry, southwestern Ireland. The town is on the northeastern shore of Lough Leane, part of Killarney National Park, and is home to St Mary's Cathedral, Ross Castle, Muckross House and Abbey, the Lakes of Killarney, MacGillycuddy's Reeks, Purple Mountain, Mangerton Mountain, Paps Mountain, the Gap of Dunloe and Torc Waterfall. Its natural heritage, history and location on the Ring of Kerry make Killarney a popular tourist destination.</p> <p> The town's population was 14,412 as of the 2022 census, making it the second largest in the county. Killarney won the Best Kept Town award in 2007, in a cross-border competition jointly organised by the Department of the Environment and the Northern Ireland Amenity Council. In 2011, it was named Ireland's tidiest town and the cleanest town in the country by Irish Business Against Litter.</p>",
      place: "The province	of Munster, County	Kerry",
    },

    {
      name: "Dingle",
      img: "attr_5.jpg",
      info: "<p> Dingle (Irish: An Daingean or Daingean Uí Chúis, meaning \'fort of Ó Cúis\') is a town in County Kerry, Ireland. The only town on the Dingle Peninsula, it sits on the Atlantic coast, about 50 kilometres (30 mi) southwest of Tralee and 71 kilometres (40 mi) northwest of Killarney. Principal industries in the town are tourism, fishing and agriculture: Dingle Mart (livestock market) serves the surrounding countryside. </p><p> In 2022, Dingle had a population of 1,671, a decrease from the 2016 census, and the oldest average age for a town in Ireland (44.4 years). Situated in a Gaeltacht region, 13.7% of the population spoke Irish on a daily basis in 2016. An adult Bottlenose dolphin named Fungie had been courting human contact in Dingle Bay since 1983 but disappeared in 2020. </p>",
      place: "The province of Munster, County County Kerry",
    },

    {
      name: "Inisheer",
      img: "attr_6.jpg",
      info: "<p> Inisheer (Irish: Inis Oírr, Inis Thiar or Inis Oirthir) is the smallest and most easterly of the three Aran Islands in Galway Bay, Ireland. With 343 residents as of the 2022 census, it is second-most populous of the Arans. Caomhán of Inis Oírr is the island\'s patron saint. There are five small settlements: Baile Thiar, Chapeltown (Baile an tSéipéil), Castle Village (Baile an Chaisleáin), Baile an Fhormna and Baile an Lorgain.</p><p>Irish is still today the daily language of the approximately 260 permanent residents. In addition, many school pupils from the mainland come to the island to learn Irish in an environment where it is a living language in the local college, Coláiste Laichtín during the months of June, July and August.</p>",
      place: "The province of Connacht, County Galway",
    },
  ];
  return (
    <div className="attrContainer">
      {attractions.map((attraction, key) => (
        <Attraction
          key={key}
          img={attraction.img}
          name={attraction.name}
          info={attraction.info}
          place={attraction.place}
          id={key}
        />
      ))}
    </div>
  );
}

export default AttractionsList;
