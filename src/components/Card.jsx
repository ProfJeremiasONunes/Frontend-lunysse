export const Card = ({children, className = '', ...props}) => {
    return(
        <div
        className={`bg-white/50 rounded-2xl shadow-lg p-6 ${className}`}
        {...props}
        >
        {children}
        </div>
    );
};