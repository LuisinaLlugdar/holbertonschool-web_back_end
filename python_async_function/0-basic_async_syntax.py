#!/usr/bin/env python3
""" wait_random: asynchronous coroutine that takes an integer
(with a default value of 10), waits for a random delay between
0 and max_delay seconds and eventually returns it """
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """ Waits for a random delay and returns it """
    random_delay = random.uniform(0, max_delay)
    await asyncio.sleep(random_delay)
    return random_delay
