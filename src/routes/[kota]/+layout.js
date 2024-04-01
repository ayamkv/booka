export const load = async ({ route, params, fetch, url }) => {

  const date = new Date();
  let tomorrow = new Date(date);
  tomorrow.setDate(date.getDate() + 1);
  let month = date.getMonth() + 1;
    if(month <= 9)
        month = '0' + month;

    let day = date.getDate();
    if(day <= 9)
        day = day.toString().padStart(2, '0');
    
    let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.

  console.log(params);
  console.log(route.id);
  
  const fetchData = async () => {
    const res = await fetch(`https://raw.githubusercontent.com/ayamkv/jadwalsholatorg/master/adzan/${params.kota}/${year}/${month}.json`);
    const dataRes = await res.json();
    console.log(dataRes)
    return dataRes;
  };

  // const data = await fetchData();

  return {
    currentPath: url.pathname,
    kota: params.kota,
    routeRes: route.id,
    adzan: fetchData()
  };
};
