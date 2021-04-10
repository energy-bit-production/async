//Async/Await
//-----------

const fetchData = () => Promise.resolve({
    data: ['Jane', 'Jojo', 'Andrew']
})

const getNamesData = () => {
    fetchData()
    .then(data => {
        console.log(data)
        return 'done'
    })
}

(async () => {
    console.log(await fetchData())
    return 'done'
})()

getNamesData()