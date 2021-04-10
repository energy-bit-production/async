//Async/Await - error
//-----------

const fetchData = () => Promise.reject('some error...')

const x = async () => {
    try {
        console.log(await fetchData())
        return 'done'
    } catch(e) {
        console.error('ERROR: ', e)
    }
}

x()
