import React from 'react'
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {

    const style = {
        Container: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            overflow: 'hidden'
        },
        wrapper: {
            padding: '10px',
            width: '100%',
        },
        content: {
            textAlign: 'center',
            margin: '40px 0',
        },
        DivHeight: {
            height: '10px'
        }

    }

    return (
        <div style={style.Container}>
            <Skeleton />
            <div style={style.wrapper}>

                <p style={style.content}>
                    <Skeleton circle={true} height={100} width={100} />
                </p>
                <div style={style.DivHeight}>
                    <Skeleton width={300} height={8} />
                </div>
                <div style={style.DivHeight}>
                    <Skeleton width={200} height={8} />
                </div>
                <div style={style.DivHeight}>
                    <Skeleton width={100} height={8} />
                </div>
                <p style={style.content}> <Skeleton count={2} height={40} /></p>

                <p style={style.content}><Skeleton count={1} height={40} /></p>
                <p style={style.content}><Skeleton height={10} width={200} /></p>
            </div>
        </div>
    )
}

export default SkeletonLoader
