#!/usr/bin/env python3
""" task1: concurrent coroutines """
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ spawn wait_random n times with the specified max_delay """
    delay_list = []
    for i in range(n):
        delay = await(wait_random(max_delay))
        delay_list.append(delay)
    return sorted(delay_list)
