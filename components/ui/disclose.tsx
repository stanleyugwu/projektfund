import React, { ElementType, HTMLAttributes, PropsWithChildren, ReactElement } from 'react'

interface IDiscloseProps extends PropsWithChildren {
    show: boolean
    as?: ElementType
    fallback?: JSX.Element
}

export const Disclose = React.forwardRef(function Discloser ({show, children, as: Element, fallback: Fallback, ...props} : IDiscloseProps & HTMLAttributes<any>) {
    return (
        <>
            {
                Element ? 
                <Element {...props}>
                    {show ? children : Fallback}
                </Element> :

                <>
                    {show ? children : Fallback} 
                </>
            }
        </>
    )
})
