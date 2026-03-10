// =========== Basic Types ============

export type RefValue = {
    type: 'ref',
    path: string
}

export type ExpValue = {
    type: 'exp',
    expression: string
}

export type LiteralValue = {
    type: 'literal',
    value: string | number | boolean | Record<string, any> | Array<any>
}

export type Value = RefValue | ExpValue | LiteralValue






// =========== Node Types ============
export type NodeType = 'block' | 'component' | 'element' | 'array' | 'slot';

export type NodeBase = {
    type: NodeType

}

export type ContainerNode = {
    children: ChildNode[]
}


export type BlockNode = {
    type: 'block'
    props: Record<string, any>
} & ContainerNode

export type ComponentNode = {
    type: 'component'
    props: Record<string, any>
} & ContainerNode


export type ElementNodeBase = {
    type: 'element'
    style?: Record<string, string | number>
}

export type ViewElementNode = {
    element: 'view'
} & ElementNodeBase & ContainerNode

export type TextElementNode = {
    element: 'text'
} & ElementNodeBase

export type ImgElementNode = {
    element: 'img'
} & ElementNodeBase

export type ElementNode = ViewElementNode | TextElementNode | ImgElementNode

export type SlotNode = {
    type: 'slot'
    name?: string
} & ContainerNode

export type ArrayNode = {
    type: 'array'
    data: unknown[]
    itemNode: ChildNode
} & ContainerNode

export type ChildNode = ComponentNode | ElementNode | ArrayNode | SlotNode

export type LatticeNode = BlockNode | ComponentNode | ElementNode | ArrayNode | SlotNode
