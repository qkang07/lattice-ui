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


export type ElementNodeBase = {
    type: 'element'
    style?: Record<string, string | number>


}

export type ViewElementNode = {
    element: 'view'
} & ElementNodeBase

export type TextElementNode = {
    element: 'text'
} & ElementNodeBase

export type ImgElementNode = {
    element: 'img'
} & ElementNodeBase

export type ElementNode = ViewElementNode | TextElementNode | ImgElementNode

export type SlotNode = {

}

