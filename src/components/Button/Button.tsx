import * as React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    onClick?: VoidFunction;
}
/* Better to use actual <button> here for semantics and keyboard navigation, but resetting button styles can be tricky, see for instance https://css-tricks.com/overriding-default-button-styles/ */
/* If I need to deal with lots of buttons, I would probably reset their style once on the root css level and carefully test it in all browsers */
/* For now tabIndex and enter handling will provide minimal accessibility, can also customize the outline border if desired */
const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => (
    <div
        className={className}
        onClick={onClick}
        onKeyDown={(event) => {
            if (event.code === 'Enter' && onClick) {
                onClick();
            }
        }}
        tabIndex={0}
    >
        {children}
    </div>
);

export default Button;
