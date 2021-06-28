export const updateObject = (item, actionValue, objPropName, valueObj  ) => {

    return item.map(u => {
        if (u[objPropName] === actionValue) {
            return {...u, ...valueObj};
        }

        return u;
    })

}