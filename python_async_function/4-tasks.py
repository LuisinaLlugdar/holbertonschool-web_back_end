#!/usr/bin/env python3
""" task4: Tasks """
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int = 0, max_delay: int = 10) -> List[float]:
    """Returns a list of all delays (float values) in ascending order"""
    delay_list = []
    for i in range(n):
        delays = await task_wait_random(max_delay)
        delay_list.append(delays)
    return sorted(delay_list)
