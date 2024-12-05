const getValue = () => {
    const blogs = localStorage.getItem("blogs")
    if (blogs) {
        return JSON.parse(blogs)
    }
    return []
}

const setValue = (data) => {
    const prevValue = getValue()
    if (!prevValue.includes(data)) {
        prevValue.push(data)
        localStorage.setItem("blogs", JSON.stringify(prevValue))
    }
}

const deleteItem = (id) => {
    const value = getValue()    
    const remain = value.filter(single => single.id === id)
    localStorage.setItem("blogs", JSON.stringify(remain))
} 


export {setValue, getValue, deleteItem}