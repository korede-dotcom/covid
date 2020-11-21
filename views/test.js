const fetcher = async () => {
    const response = await fetch("/state");
    const datar = await response.json();
    console.log(datar);
}
fetcher();

alert()