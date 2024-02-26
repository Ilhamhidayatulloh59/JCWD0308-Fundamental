const tryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false
        if (success) {
            resolve('success')
        } else {
            reject('error ini di reject')
        }
    }, 5000)
})

const asyncAwait = async () => {
    console.log("satu")
    await tryPromise
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        // .finally(() => console.log('finally done!'))
    console.log("dua")
}

asyncAwait()