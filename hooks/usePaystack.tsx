export default () => {
    return (payment: any, onSuccess: any, onClose: any) => {
        console.log('Use', payment)
        // @ts-expect-error
        const popup = PaystackPop.setup({ ...payment, onClose, callback: (transaction) => onSuccess(transaction) })
        popup.openIframe()
    }
}