#!/usr/bin/env python3
"""
Annotate the below function's parameters and
return values with the appropriate types
def element_length(lst):
    return [(i, len(i)) for i in lst]
"""
from typing import Iterable, Sequence, Tuple, List


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples containing the element and its length"""
    return [(i, len(i)) for i in lst]
