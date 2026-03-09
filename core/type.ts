export type NodeType = 'block' | 'component' | 'element' | 'array' | 'slot';

export type NodeBase = {
    type: NodeType

}


export type BlockNode = {
    type: 'block'
    props: Record<string, any>
} 

export type ComponentNode = {
    type: 'component'
    props: Record<string, any>
}

