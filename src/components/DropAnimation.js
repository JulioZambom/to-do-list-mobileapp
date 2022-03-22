import { MotiView } from 'moti';

const DropAnimation = ({children, isDelay}) => {
    return(
    <MotiView style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}
    from={{
        bottom: '20%',
        opacity: 0
    }}
    animate={{
        bottom: 0,
        opacity: 1
    }}
    transition={{
        type: 'spring',
        duration: 500,
        delay: isDelay ? isDelay.delay : 0
    }}
    >
        {children}
    </MotiView>
    );
}

export default DropAnimation;