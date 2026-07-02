import './index.css';

export default function ErrorMessage() {
    return (
        <>
            <div className="text-center text-lg my-5 p-4 text-red-800 border-4 border-red-700 rounded-md">
                Nie mogę pobrać treści. Spróbuj ponownie później.
            </div>
        </>
    );
}
