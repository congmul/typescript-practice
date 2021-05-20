import { Child, ChildAsFc } from './Child';

const Parent = () => {
    return <ChildAsFc color="red" onClick={() => console.log('Clicked')}>
        Only ChildAsFC can take this contents
    </ChildAsFc>
};

export default Parent;