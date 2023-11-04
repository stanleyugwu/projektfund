export default () => {
    return (payment: any, onSuccess: any, onClose: any) => {
        // @ts-expect-error
        const popup = PaystackPop.setup({ ...payment, onClose, callback: (transaction) => onSuccess(transaction) })
        popup.openIframe()
    }
}