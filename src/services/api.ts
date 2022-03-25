import axios from 'axios';
import { useState, useEffect } from 'react';

interface cep {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}
export const useCep = (cep: string) => {
    const [data, setData] = useState<cep>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        axios
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [cep]);

    return { data, loading, error };
}