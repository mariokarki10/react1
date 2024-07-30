export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=thBWJ59q51XuV24t4R8N9SY82OMgBsQf&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
};
