import crypto from "crypto";

function generateHash(length: number = 36): string
{
    return crypto.randomBytes(length).toString('hex');
}

export {
    generateHash,
}