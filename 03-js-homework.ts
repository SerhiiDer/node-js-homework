const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

delay(2000).then(() => console.log("Пройшло 2 секунди"))