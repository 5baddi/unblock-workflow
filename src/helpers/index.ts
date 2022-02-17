import crypto from "crypto";

function generateHash(): string
{
    return crypto.randomBytes(36).toString('hex');
}

export {
    generateHash,
}