// =========== Basic Types ============


export type RefValue = {
    type: 'ref',
    path: string[]
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


export type PropType = {
    name: string
    value: Value
}



// =========== Node Types ============
export type NodeType = 'block' | 'component' | 'element' | 'array' | 'slot';

export type NodeBase = {
    props: PropType[]
}


// like block, component, slot, or view element, which have children nodes
export type ContainerNode = {
    children: ChildNode[]
}

// the container of lattice block, used in host platform like react, vue, etc.
export type BlockNode = {
    type: 'block'
    props: Record<string, any>
    // the components registered in the block, will be referenced by name
    components: Record<string, any>
} & ContainerNode

// a component can be used
export type ComponentNode = {
    type: 'component'
    name: string
    props: Record<string, any>
} & NodeBase & ContainerNode

// basic ui element, include view, text, img, currently.
// in element node, all props with name start with 'style.' will be treated as style.
export type ElementNodeBase = {
    type: 'element'
    // element can have style.
    style?: Record<string, string | number>
} & NodeBase

// a view element, like div, basic ui element, by default have a column flex layout.
export type ViewElementNode = {
    element: 'view'
} & ElementNodeBase & ContainerNode

// all text must be wrapped in text element, can be nested in another text element.
export type TextElementNode = {
    element: 'text'
} & ElementNodeBase & {
    // can only have text children
    children?: TextElementNode[]
}

// image element.
export type ImgElementNode = {
    element: 'img'
} & ElementNodeBase

export type ElementNode = ViewElementNode | TextElementNode | ImgElementNode

// host other components, or non-lattice components.
// in designer mode, slot allow user to add other components;
// in runtime environment, slot allow user to pass native components(like react component or vue component)
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
