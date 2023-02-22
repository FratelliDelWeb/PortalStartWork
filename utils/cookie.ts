import { serialize, CookieSerializeOptions } from 'cookie';
import { NextApiResponse } from 'next';

/**
 * This sets `cookie` using the `res` object
 */

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)
    options.expires = new Date(Date.now() + (60 * 60 * 2000))
    res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}