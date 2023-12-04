import md5 from 'md5';

export function gravatar(value: string) {
    const hash = md5(value).trim().toLowerCase();
    const avatar = `https://www.gravatar.com/avatar/${hash}?s=${150}&d=mp`;
    return avatar;
}
