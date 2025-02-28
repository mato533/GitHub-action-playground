export const generateTestCommand = (scenario, type)=>{
    return scenario.split(',').flatMap((s)=>genTestCmd(s.trim(),type)).join(' ')
}

const genTestCmd =(scenario, type)=>{
    return type === '*'
        ? [`test:e2e:${scenario}-esm`,`test:e2e:${scenario}-cjs`]
        : [`test:e2e:${scenario}-${type}`]
}

export const generateBuildCommand = (scenario, type)=>{
    return scenario.split(',').map((s)=>genBuildFilter(s.trim(),type)).join(' ')
}
const genBuildFilter =(scenario,type)=>{
    return `--filter=example-${scenario}-${type}`
}