import tw from 'twin.macro';
import { ActionButton } from './ActionButton';

export const Actions = () => {
    return (
        <div tw='flex gap-6'>
            <ActionButton label='Custom order' isDark />
            <ActionButton label='Existing inventory' isDark={false} />
        </div>
    );
};
