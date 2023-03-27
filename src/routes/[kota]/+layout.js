export const load = async ({ route, params, fetch, url }) => {
  console.log(params);
  console.log(route.id);
  
  const fetchData = async () => {
    const res = await fetch(`https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${params.kota}/2023/03.json`);
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
