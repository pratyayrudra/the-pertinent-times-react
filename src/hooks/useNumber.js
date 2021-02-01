const useNumber = (defaultValue = 0) => {
    let variable = defaultValue

    const setVariable = value => variable = value

    return [variable, setVariable]
}

export default useNumber