/**
 * Created by dierickx.len on 18/03/2017.
 */
import isDate from './is'

export default (x) => {
  return isDate(x) && isFinite(x.valueOf())
}
