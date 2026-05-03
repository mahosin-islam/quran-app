const url = 'https://api.alquran.cloud/v1/surah/2/editions/quran-uthmani,en.sahih';

fetch(url)
    .then(async (res) => {
        console.log('status', res.status);
        const text = await res.text();
        console.log(text.slice(0, 1200));
    })
    .catch((err) => {
        console.error('fetch error', err);
        process.exit(1);
    });
